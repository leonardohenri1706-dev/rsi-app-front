import { CryptoService, UsersRepository, getDb } from "../infra";
import { RegistrationUseCase } from "../applications";

export class RegistrationComposer {
  static async compose() {
    return new RegistrationUseCase(
      new UsersRepository(await getDb()),
      new CryptoService()
    );
  }
}
