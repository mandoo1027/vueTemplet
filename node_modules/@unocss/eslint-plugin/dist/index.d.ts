import * as _typescript_eslint_utils_dist_ts_eslint_Rule from '@typescript-eslint/utils/dist/ts-eslint/Rule';

declare const _default: {
    rules: {
        order: _typescript_eslint_utils_dist_ts_eslint_Rule.RuleModule<"invalid-order", never[], any>;
        'order-attributify': _typescript_eslint_utils_dist_ts_eslint_Rule.RuleModule<"invalid-order", never[], any>;
    };
    configs: {
        recommended: {
            plugins: string[];
            rules: {
                '@unocss/order': string;
                '@unocss/order-attributify': string;
            };
        };
    };
};

export { _default as default };
