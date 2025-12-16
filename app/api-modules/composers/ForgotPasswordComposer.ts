import {
  SendMailService,
  MongoService,
  UserRepository,
  JwtService,
} from "../infra";
import { ForgotPasswordUseCase } from "../applications";

export class ForgotPasswordComposer {
  static async compose() {
    return new ForgotPasswordUseCase(
      new UserRepository(await MongoService.getDb()),
      new SendMailService(),
      new JwtService()
    );
  }
}
