// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthService } from './../auth.service';

// // describe('AuthService', () => {
// //   let service: AuthService;

// //   beforeEach(async () => {
// //     const module: TestingModule = await Test.createTestingModule({
// //       providers: [AuthService],
// //     }).compile();

// //     service = module.get<AuthService>(AuthService);
// //   });

// //   it('should be defined', () => {
// //     expect(service).toBeDefined();
// //   });
// // });


// Exemple with mocked repostiry injection


// export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
//   findOne: jest.fn(entity => entity),
//   // ...
// }));
// describe('UserService', () => {
//   let service: UserService;
//   let repositoryMock: MockType<Repository<UserEntity>>;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         UserService,
//         // Provide your mock instead of the actual repository
//         { provide: getRepositoryToken(UserEntity), useFactory: repositoryMockFactory },
//       ],
//     }).compile();
//     service = module.get<UserService>(UserService);
//     repositoryMock = module.get(getRepositoryToken(UserEntity));
//   });

//   it('should find a user', async () => {
//     const user = {name: 'Alni', id: '123'};
//     // Now you can control the return value of your mock's methods
//     repositoryMock.findOne.mockReturnValue(user);
//     expect(service.findUser(user.id)).toEqual(user);
//     // And make assertions on how often and with what params your mock's methods are called
//     expect(repositoryMock.findOne).toHaveBeenCalledWith(user.id);
//   });
// });
