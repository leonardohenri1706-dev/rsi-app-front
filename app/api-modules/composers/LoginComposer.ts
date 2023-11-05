import { CryptoService, JwtService, UserRepository, getDb } from "../infra";
import { LoginUseCase } from "../applications";

export class LoginComposer {
  static async compose() {
    return new LoginUseCase(
      new UserRepository(await getDb()),
      new CryptoService(),
      new JwtService()
    );
  }
}
