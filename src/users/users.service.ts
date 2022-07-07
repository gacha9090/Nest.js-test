import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException, Response } from '@nestjs/common';
import { response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  // users는 CreateUserDto 객체로 할당 > DB 연결 전에 mockup test용 array
  public users: CreateUserDto[] = [];

  create(userData: CreateUserDto): CreateUserDto {
    this.users.push(userData);
    return userData;
  }

  findAll(): CreateUserDto[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((user) => user.id === Number(id));
    if (!user) {
      let exception_msg: string = `user id ${id} is not found`
      let exception_code: number = 400
      let rtn_obj: object = {
        "error_msg": exception_msg,
        "error_code": exception_code
      }

      // Nest.js에서는 response return예외는 return 형식이 아닌 throw 형식으로 던져야 함
      throw new HttpException(rtn_obj, HttpStatus.BAD_REQUEST)
    }
    else{
      return user;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
