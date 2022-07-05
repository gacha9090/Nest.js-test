import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestapiController } from './testapi/testapi.controller';
import { UserModule } from './user/user.module';


@Module({
  imports: [UserModule],
  controllers: [AppController, TestapiController],
  providers: [AppService],
})
export class AppModule {}
