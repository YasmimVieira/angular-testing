import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  public numberOfGeneratedIds = 0;

  constructor() { }

  public generatedUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw Error("Prefix can not be empty")
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`
  }

  public getNumberOfGenerateUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  public generateUniqueId(): string {
    return null;
  }
}
