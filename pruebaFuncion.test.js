const { paddingLeft } = require('./pruebaFuncion.js');

describe ('testKata', () => {
    
    test('should return xxhola', () => expect(paddingLeft('hola', 6,'x')).toBe('xxhola'));

    test('should return aahola', () => expect(paddingLeft('hola', 6,'a')).toBe('aahola'));
    
    test('should return aaee', () => expect(paddingLeft('ee', 4,'aa')).toBe('aaee'));
    
    test('should return xxxxxx', () => expect(paddingLeft('xxxx', 6,'x')).toBe('xxxxxx'));
    
    test('should return xxxxxx', () => expect(paddingLeft('', 6,'x')).toBe('xxxxxx'));
    
    test('should return hola mi amigo', () => expect(paddingLeft('hola mi amigo', 6,'x')).toBe('hola mi amigo'));
    
    test('should return xxxx', () => {
        expect(paddingLeft('xxxx', 0,'x')).toBe('xxxx');
    });

});