import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/users/users.service';
import { UsersController } from './modules/users/users.controller';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './modules/auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Rend le ConfigService disponible partout
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, // ✅ port MySQL par défaut
      username: 'root', // ✅ le plus souvent "root" sous WAMP
      password: '', // ✅ mot de passe vide par défaut sur WAMP (à changer en prod)
      database: 'training_db', // ✅ nom de ta base de données
      entities: [User], // ou path: [__dirname + '/**/*.entity{.ts,.js}']
      synchronize: true, // ❗ uniquement en dev !
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
