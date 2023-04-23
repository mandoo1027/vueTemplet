'use strict';

const node_path = require('node:path');
const utils = require('@typescript-eslint/utils');
const synckit = require('synckit');
const dirs = require('./dirs.cjs');
const MagicString = require('magic-string');
require('node:url');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

const MagicString__default = /*#__PURE__*/_interopDefaultLegacy(MagicString);

const CLASS_FIELDS = ["class", "classname"];
const AST_NODES_WITH_QUOTES = ["Literal", "VLiteral"];

const sortClasses$1 = synckit.createSyncFn(node_path.join(dirs.distDir, "worker-sort.cjs"));
const order = utils.ESLintUtils.RuleCreator((name) => name)({
  name: "order",
  meta: {
    type: "layout",
    fixable: "code",
    docs: {
      description: "Order of UnoCSS utilities in class attribute",
      recommended: "warn"
    },
    messages: {
      "invalid-order": "UnoCSS utilities are not ordered"
    },
    schema: []
  },
  defaultOptions: [],
  create(context) {
    function checkLiteral(node) {
      if (typeof node.value !== "string" || !node.value.trim())
        return;
      const input = node.value;
      const sorted = sortClasses$1(input).trim();
      if (sorted !== input) {
        context.report({
          node,
          messageId: "invalid-order",
          fix(fixer) {
            if (AST_NODES_WITH_QUOTES.includes(node.type))
              return fixer.replaceTextRange([node.range[0] + 1, node.range[1] - 1], sorted);
            else
              return fixer.replaceText(node, sorted);
          }
        });
      }
    }
    const scriptVisitor = {
      JSXAttribute(node) {
        if (typeof node.name.name === "string" && CLASS_FIELDS.includes(node.name.name.toLowerCase()) && node.value) {
          if (node.value.type === "Literal")
            checkLiteral(node.value);
        }
      },
      SvelteAttribute(node) {
        if (node.key.name === "class") {
          if (node.value?.[0].type === "SvelteLiteral")
            checkLiteral(node.value[0]);
        }
      }
    };
    const templateBodyVisitor = {
      VAttribute(node) {
        if (node.key.name === "class") {
          if (node.value.type === "VLiteral")
            checkLiteral(node.value);
        }
      }
    };
    if (context.parserServices == null || context.parserServices.defineTemplateBodyVisitor == null) {
      return scriptVisitor;
    } else {
      return context.parserServices?.defineTemplateBodyVisitor(templateBodyVisitor, scriptVisitor);
    }
  }
});

const sortClasses = synckit.createSyncFn(node_path.join(dirs.distDir, "worker-sort.cjs"));
const INGORE_ATTRIBUTES = ["style", "class", "classname", "value"];
const orderAttributify = utils.ESLintUtils.RuleCreator((name) => name)({
  name: "order-attributify",
  meta: {
    type: "layout",
    fixable: "code",
    docs: {
      description: "Order of UnoCSS attributes",
      recommended: false
    },
    messages: {
      "invalid-order": "UnoCSS attributes are not ordered"
    },
    schema: []
  },
  defaultOptions: [],
  create(context) {
    const scriptVisitor = {};
    const templateBodyVisitor = {
      VStartTag(node) {
        const valueless = node.attributes.filter((i) => typeof i.key?.name === "string" && !INGORE_ATTRIBUTES.includes(i.key?.name?.toLowerCase()) && i.value == null);
        if (!valueless.length)
          return;
        const input = valueless.map((i) => i.key.name).join(" ").trim();
        const sorted = sortClasses(input);
        if (sorted !== input) {
          context.report({
            node,
            messageId: "invalid-order",
            fix(fixer) {
              const codeFull = context.getSourceCode();
              const offset = node.range[0];
              const code = codeFull.getText().slice(node.range[0], node.range[1]);
              const s = new MagicString__default(code);
              const sortedNodes = valueless.map((i) => [i.range[0] - offset, i.range[1] - offset]).sort((a, b) => b[0] - a[0]);
              for (const [start, end] of sortedNodes.slice(1))
                s.remove(start, end);
              s.overwrite(sortedNodes[0][0], sortedNodes[0][1], ` ${sorted.trim()} `);
              return fixer.replaceText(node, s.toString());
            }
          });
        }
      }
    };
    if (context.parserServices == null || context.parserServices.defineTemplateBodyVisitor == null) {
      return scriptVisitor;
    } else {
      return context.parserServices?.defineTemplateBodyVisitor(templateBodyVisitor, scriptVisitor);
    }
  }
});

const configsRecommended = {
  plugins: ["@unocss"],
  rules: {
    "@unocss/order": "warn",
    "@unocss/order-attributify": "warn"
  }
};

const index = {
  rules: {
    order,
    "order-attributify": orderAttributify
  },
  configs: {
    recommended: configsRecommended
  }
};

module.exports = index;
