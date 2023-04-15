import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UsersController } from './controller'
import { UserDto, UserSchema } from './dto/user.dto'
import { UsersService } from './service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserDto.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
