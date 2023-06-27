"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const nunjucks = require("nunjucks");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const express = app.getHttpAdapter().getInstance();
    const views = (0, path_1.join)(__dirname, '..', 'views');
    nunjucks.configure(views, { express });
    const staticAssets = (0, path_1.join)(__dirname, '..', 'static');
    app.useStaticAssets(staticAssets);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map