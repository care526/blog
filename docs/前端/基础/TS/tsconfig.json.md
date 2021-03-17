# tsconfig.json
```json
{
    "extends": "./configs/base",

    "compilerOptions": {
        "target": "ES5",  // 
        "experimentalDecorators": true,  // 启用实验性的装饰器特性
    },

    "files": [

    ],

    "include": [

    ],
    // 编译时排除的文件或目录
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ],
}
```