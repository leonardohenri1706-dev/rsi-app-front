import type { RegistrationBody } from "../presentation/validators";
import type { CryptoService, UserRepository } from "../infra";
import type { User } from "../domain/entities";

export class RegistrationUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptoService: CryptoService
  ) {}

  public async execute(input: RegistrationBody): Promise<User> {
    const { password: unencryptedPassword, email, name } = input;

    const userWithEmailExists = await this.userRepository.findByEmail(email);

    if (userWithEmailExists) {
      throw {
        cause: "User with this email already exists",
        type: "USER_WITH_EMAIL_EXISTS",
        status: 400,
      };
    }

    const cryptographic_salt = this.cryptoService.generateSalt();
    const password = this.cryptoService.createHash(
      unencryptedPassword,
      cryptographic_salt
    );

    const intubation_experience =
      input.intubationExperience as User["intubation_experience"];
    const profession = input.profession as User["profession"];

    const user = {
      intubation_experience,
      cryptographic_salt,
      profession,
      password,
      email,
      name,
    } as User;
    await this.userRepository.create(user);
    const createdUser = await this.userRepository.findByEmail(email);

    if (!createdUser) throw new Error("User not created");

    const {
      cryptographic_salt: _,
      password: __,
      ...userWithoutPassword
    } = createdUser;

    return userWithoutPassword as User;
  }
}
