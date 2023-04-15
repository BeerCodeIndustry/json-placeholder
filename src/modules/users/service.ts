import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { merge } from 'lodash'
import { Model } from 'mongoose'

import { UserDocument, UserDto } from './dto/user.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserDto.name) private userModel: Model<UserDocument>,
  ) {}

  async getAll(): Promise<UserDto[]> {
    return this.userModel.find().exec()
  }

  async getUser(id: string): Promise<UserDto> {
    const user = await this.userModel.findOne({ id }).exec()

    if (!user) {
      throw new NotFoundException('User not found')
    }

    return user
  }

  async updateUser(id: string, updatedFields: UserDto): Promise<UserDto> {
    const user = await this.getUser(id)

    const updatedUser = merge(user, updatedFields)

    try {
      await this.userModel.findOneAndUpdate({ id }, updatedUser, {
        new: true,
      })
    } catch (error) {
      throw new ForbiddenException('Error updating user')
    }

    return updatedUser
  }
}
