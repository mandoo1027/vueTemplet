import { loadConfig } from '@unocss/config';
import { parseVariantGroup, notNull, collapseVariantGroup, createGenerator } from '@unocss/core';
import { runAsWorker } from 'synckit';

async function sortRules(rules, uno) {
  const unknown = [];
  if (!uno.config.details)
    uno.config.details = true;
  const expandedResult = parseVariantGroup(rules);
  rules = expandedResult.expanded;
  const result = await Promise.all(rules.split(/\s+/g).map(async (i) => {
    const token = await uno.parseToken(i);
    if (token == null) {
      unknown.push(i);
      return void 0;
    }
    const variantRank = (token[0][5]?.variantHandlers?.length || 0) * 1e5;
    const order = token[0][0] + variantRank;
    return [order, i];
  }));
  let sorted = result.filter(notNull).sort((a, b) => {
    let result2 = a[0] - b[0];
    if (result2 === 0)
      result2 = a[1].localeCompare(b[1]);
    return result2;
  }).map((i) => i[1]).join(" ");
  if (expandedResult?.prefixes.length)
    sorted = collapseVariantGroup(sorted, expandedResult.prefixes);
  return [...unknown, sorted].join(" ").trim();
}

async function getGenerator() {
  const { config, sources } = await loadConfig();
  if (!sources.length)
    throw new Error("[@unocss/eslint-plugin] No config file found, create a `uno.config.ts` file in your project root and try again.");
  return createGenerator(config);
}
let promise;
runAsWorker(async (classes) => {
  promise = promise || getGenerator();
  const uno = await promise;
  return await sortRules(classes, uno);
});
