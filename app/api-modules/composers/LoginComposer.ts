import { CryptoService, JwtService, UsersRepository, getDb } from "../infra";
import { LoginUseCase } from "../applications";

export class LoginComposer {
  static async compose() {
    return new LoginUseCase(
      new UsersRepository(await getDb()),
      new CryptoService(),
      new JwtService()
    );
  }
}
