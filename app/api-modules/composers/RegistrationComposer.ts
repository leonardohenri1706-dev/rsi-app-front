import {
  MongoService,
  UserRepository,
  CryptoService,
  JwtService,
} from "../infra";
import { RegistrationUseCase } from "../applications";

export class RegistrationComposer {
  static async compose() {
    return new RegistrationUseCase(
      new UserRepository(await MongoService.getDb()),
      new CryptoService(),
      new JwtService()
    );
  }
}
