import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger as NestLogger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const nestLogger = new NestLogger('Main_Logger');
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });

  const config = new DocumentBuilder()
    .setTitle('swap')
    .setDescription('The swap API description')
    .addBearerAuth(
      { type: 'http', scheme: 'Bearer', bearerFormat: 'Token', in: 'header' },
      'access-token',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  const port = 8822;
  await app.listen(port).then(async () => {
    nestLogger.log(`http://127.0.0.1:${port}/doc`, 'Running Swagger');
  });
}
bootstrap();
