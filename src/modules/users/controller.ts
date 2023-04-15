import { Body, Controller, Get, Param, Put } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { UserDto } from './dto/user.dto'
import { UsersService } from './service'

@ApiTags('Users Controller')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  getAll(): Promise<UserDto[]> {
    return this.usersService.getAll()
  }

  @ApiOperation({ summary: 'Get user' })
  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDto> {
    return this.usersService.getUser(id)
  }

  @ApiOperation({ summary: 'Get all users' })
  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updatedFields: UserDto,
  ): Promise<UserDto> {
    return this.usersService.updateUser(id, updatedFields)
  }
}
