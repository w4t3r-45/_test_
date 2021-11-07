// here we need to import our function to test or it's class (if it is static)
// jest must be installed and configured for typescript
/**
 * Utiliy Function conditions :
 * doesn't contains Side Effects like :
 * console.log()
 * DOM manipulation 
 * changing values : x = y
 * it's output depends always to it's input
 */



describe('Utility function test', () => {
      it('returns', ()=>{ 
          expect(formatName(name:{last:"said" , first:"ait" })).not.toBeUndefined();
      });
      it('returns a string', () => {
          const t = formatName(name:{last:"said" , first:"ait" });
          expect(typeof t).toBe("string");
      });
      it('output depends to it\'s input', () => {
          const first = "said";
          const last = "ait";
          const t = formatName(name:{last,first});
          expect(t).toMatch(/`${first} || {last}`/);
      });
    });
  });