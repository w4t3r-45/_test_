// Promise<T> ==> T is the return type of our promise when our promise Success
public static get (path:string, params:{id:string}, headers?:{Authotization:string }) : Promise<T> {
      return this.request("GET", path, params, headers);
    }
    