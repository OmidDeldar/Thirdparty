// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { DataSource, DataSourceOptions } from 'typeorm';
// import { checkDatabase, createDatabase } from 'typeorm-extension';
// const defaultDatabaseOptions = {
//   // logger: new DatabaseLogger(),
//   synchronize: process.env.DB_SYNCHRONIZE === 'true' || false,
//   migrationsTableName: 'migrations',
// };

// export const OrmConfigModulePostgres = {
//   inject: [ConfigService], // add this line
//   useFactory: async (configService: ConfigService) => {
//     const options: TypeOrmModuleOptions = {

//       name: 'connection_postgres',
//       type: 'postgres',
//       host: configService.get<string>('DB_HOST', 'localhost'),
//       port: configService.get<number>('DB_PORT', 5432),
//       database: configService.get<string>('DB_DATABASE', ''),
//       username: configService.get<string>('DB_USERNAME', 'postgres'),
//       password: configService.get<string>('DB_PASSWORD', '123456'),
//       entities: [
//         'dist/**/*.entity.js',
//         '**/*.entity.js',
//       ],
//       synchronize: true,
//       autoLoadEntities: true,
//     };

//     const dataSourceOptions: DataSourceOptions = {
//       type: 'postgres',
//       host: configService.get<string>('DB_HOST', 'localhost'),
//       port: configService.get<number>('DB_PORT', 5432),
//       database: configService.get<string>('DB_DATABASE', ''),
//       username: configService.get<string>('DB_USERNAME', ''),
//       password: configService.get<string>('DB_PASSWORD', ''),
//       migrations: ['dist/migrations/*{.ts,.js}'],
//       migrationsTableName: 'updatePostTable1672484099418',
//       migrationsRun: false,
//     };

//     if (!(await checkDatabase({ options: dataSourceOptions })).exists) {
//       createDatabase({ options: dataSourceOptions })
//         .then((res) => {
//           console.log('Database created successfully');
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }

//     return options;
//   },

//   dataSourceFactory: async (options) => {
//     const dataSource = await new DataSource(options).initialize();
//     return dataSource;
//   },
// };
