import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ExternalOauthModule } from './external-oauth/external-oauth.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTHORIZATION',
        transport: Transport.TCP,
        options: { port: 8080, host: 'authorization' },
      },
    ]),
    ExternalOauthModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
