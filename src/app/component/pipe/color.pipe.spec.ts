import { ColorPipe } from './color.pipe';

describe( 'ColorPipe', () => {
    it( 'create an instance', () => {
        const pipe = new ColorPipe();
        expect( pipe ).toBeTruthy();
    } );

    it( 'show red color', () => {
        const pipe = new ColorPipe();
        expect( pipe.transform( true ) ).toEqual( 'red' );
    } );

    it( 'show green color', () => {
        const pipe = new ColorPipe();
        expect( pipe.transform( false ) ).toEqual( 'green' );
    } );

} );
