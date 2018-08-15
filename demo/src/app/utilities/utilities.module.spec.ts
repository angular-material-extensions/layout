import { UtilitiesModule } from './utilities.module';

describe('UtilitiesModule', () => {
  let utilitiesModule: UtilitiesModule;

  beforeEach(() => {
    utilitiesModule = new UtilitiesModule();
  });

  it('should create an instance', () => {
    expect(utilitiesModule).toBeTruthy();
  });
});
