import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThirdPartyModule } from './thirdparty/core/third.party.module';

@Module({
  imports: [
    ThirdPartyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
