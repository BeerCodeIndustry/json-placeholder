import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'

@Schema()
export class UserAddressGeo {
  @ApiProperty()
  @Prop()
  lat: string

  @ApiProperty()
  @Prop()
  lng: string
}

@Schema()
export class UserAddress {
  @ApiProperty()
  @Prop()
  street: string

  @ApiProperty()
  @Prop()
  suite: string

  @ApiProperty()
  @Prop()
  city: string

  @ApiProperty()
  @Prop()
  zipcode: string

  @ApiProperty()
  @Prop()
  geo: UserAddressGeo
}

@Schema()
export class UserCompany {
  @ApiProperty()
  @Prop()
  name: string

  @ApiProperty()
  @Prop()
  catchPhrase: string

  @ApiProperty()
  @Prop()
  bs: string
}

@Schema()
export class UserDto {
  @ApiProperty()
  @Prop()
  id: number

  @ApiProperty()
  @Prop()
  name: string

  @ApiProperty()
  @Prop()
  username: string

  @ApiProperty()
  @Prop()
  email: string

  @ApiProperty()
  @Prop()
  address: UserAddress

  @ApiProperty()
  @Prop()
  phone: string

  @ApiProperty()
  @Prop()
  website: string

  @ApiProperty()
  @Prop()
  company: UserCompany
}

export const UserSchema = SchemaFactory.createForClass(UserDto)

export type UserDocument = UserDto & Document
