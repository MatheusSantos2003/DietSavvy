import { User,ApiResponse } from "@nutrition-app/models"
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../entities/user.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private jwtService: JwtService
  ) {}

  public async listAllUsers(): Promise<ApiResponse<User[]>> {
    const users =  await this.usersRepository.find();

    return { sucess:true, message: "Succesfully listed users ",result: users } as ApiResponse<User[]>
  }

  public async createUser(user: User): Promise<ApiResponse<any>>  {
    try {
      const entity = new UserEntity();
      entity.email = user.email;
      entity.name = user.name;

      entity.password = await this.hashPassowrd(user.password);

     const found =  await this.usersRepository.findOneBy({ email: entity.email });

     if(!found && !found?.id) {
      const result =  await this.usersRepository.insert(entity);

      return { statusCode:201 ,sucess:true, message: "Succesfully created user ",result: result.raw.email } as ApiResponse<any>


     } else {
      return { statusCode:500, sucess:false, message: "User Already Exists!" } as ApiResponse<any>
     }


    } catch (error:any) {
      return { statusCode:500, sucess:false, message: "There was a problem creating a new user", error: error.message } as ApiResponse<any>
    }
  }

  public async login(user: User) {

    try {
      const entity = new UserEntity();
      entity.email = user.email;
      entity.name = user.name;
      entity.password = user.password;

     const found =  await this.usersRepository.findOneBy({ email: entity.email , name: entity.name});

     if(found && found.id){
      // compare password

      const isMatch = await this.compareHash(entity.password,found.password)

        if(isMatch) {

        const payload = {sub: found.id, email: found.email};
        const token =  await this.jwtService.signAsync(payload);
         const jwt = {
            access_token:token
          };
          return { sucess:true, message: "Succesfully Logged In! ", result: jwt } as ApiResponse<any>
        } else {
          return {  statusCode: 500, sucess:false, message: "Invalid Email or Password!", error: "Invalid Email or Password!"} as ApiResponse<any>
        }


     } else {
      return { statusCode: 500, sucess:false, message: "User not Found" } as ApiResponse<any>
     }

    } catch (error:any) {
      return { statusCode:500, sucess:false, message: "There was a problem finding a user", error: error.message } as ApiResponse<any>
    }

  }


  private async hashPassowrd(password:any): Promise<string> {

    const salts = Number(process.env.HASH_SALT);

   const hash = await bcrypt.hash(password,salts);

   return hash;

  }

  private async compareHash(password: string, hash: string): Promise<boolean>{

    const isMatch = await bcrypt.compare(password,hash);

    return isMatch;
  }
}
