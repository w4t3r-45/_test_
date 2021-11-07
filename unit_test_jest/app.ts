export default class Hello{ 
  public static formatName(name: {last?: string, first?: string}): string {
          return `{name?.last}{name?.last && name?.first ? ', ': ''}{name?.first}`

  }
        }
    