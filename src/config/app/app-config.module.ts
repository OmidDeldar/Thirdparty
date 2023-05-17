import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfiguration from '../configs/app-configuration';


@Module({
    imports:[ConfigModule.forRoot({
        envFilePath: `.env.${process.env.NODE_ENV}`,
        load:[appConfiguration],
        isGlobal: true
    })],
})
export class ConfigurationModule {}