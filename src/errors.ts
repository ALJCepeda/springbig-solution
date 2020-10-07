export class AppError {
  public when: Date;

  constructor(
    public message: string
  ) {
    this.when = new Date()
  }
}

export class DisplayableError extends AppError {
  cleared = false
}

export class UserError extends DisplayableError {}
export class APIError extends DisplayableError {}
