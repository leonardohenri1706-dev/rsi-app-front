import { CryptoService, UserRepository, getDb } from "../infra";
import { RegistrationUseCase } from "../applications";

export class RegistrationComposer {
  static async compose() {
    return new RegistrationUseCase(
      new UserRepository(await getDb()),
      new CryptoService()
    );
  }
}
