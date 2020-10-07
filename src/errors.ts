export class AppError {
  public when: Date;

  constructor(
    public message: string
  ) {
    this.when = new Date()
  }
}

export class UserError extends AppError {
  cleared = false
}
