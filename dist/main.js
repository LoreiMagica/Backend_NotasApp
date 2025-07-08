"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:4200',
        credentials: true,
    });
    const puerto = process.env.PORT ?? 3000;
    await app.listen(puerto);
    console.log(`Backend ejecutándose en http://localhost:${puerto}`);
}
bootstrap();
//# sourceMappingURL=main.js.map