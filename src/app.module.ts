import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThirdPartyModule } from './thirdparty/core/third.party.module';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';
import { ConfigurationModule } from './config/app/app-config.module';

@Module({
  imports: [
    ThirdPartyModule,
    ConfigurationModule,
    ConfigModule.forRoot({
      envFilePath: getEnvPath(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
