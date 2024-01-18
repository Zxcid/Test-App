export class AppRoutingConstant {
  public static mainPath = '/';

  /**
   * Given path-keys as an array
   * This method constructs the path string
   * Gets every string in array
   * Puts an / before
   * Adds it to the string that will be returned
   * @param keys: string[]
   * @return string
   */
  public static fullPath(keys: string[]): string {
    let path = '';
    keys.forEach((key:string) => {
      path += this.mainPath + key;
    });
    return path;
  }
}
