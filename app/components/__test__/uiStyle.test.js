//unit test for uiStyle.js

it('has styles', () => {
    const styles = require('../uiStyle');
    expect(styles).toBeDefined();
});


it('should has container', function () {
    const styles = require('../uiStyle');
    expect(styles.default.container).toBeDefined();
});

it('should has textContainer', function () {
    const styles = require('../uiStyle');
    expect(styles.default.textContainer).toBeDefined();
});

it('should has titleText', function () {
    const styles = require('../uiStyle');
    expect(styles.default.titleText).toBeDefined();
});

it('should has container_tests', function () {
    const styles = require('../uiStyle');
    expect(styles.default.container_tests).toBeDefined();
});

it('should has textNoAbsolute', function () {
    const styles = require('../uiStyle');
    expect(styles.default.textNoAbsolute).toBeDefined();
});

it('should has text', function () {
    const styles = require('../uiStyle');
    expect(styles.default.text).toBeDefined();
});

it('should has stackedText', function () {
    const styles = require('../uiStyle');
    expect(styles.default.stackedText).toBeDefined();
});

it('should has vomsCircle', function () {
    const styles = require('../uiStyle');
    expect(styles.default.vomsCircle).toBeDefined();
});

it('should has contentContainer', function () {
    const styles = require('../uiStyle');
    expect(styles.default.contentContainer).toBeDefined();
});

it('should has contentContainerCentered', function () {
    const styles = require('../uiStyle');
    expect(styles.default.contentContainerCentered).toBeDefined();
});

it('should has container with correct content', function () {
    const styles = require('../uiStyle');
    expect(styles.default.container).toEqual({
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#9AD3FF',
    });
});

it('should has textContainer with correct content', function () {
    const styles = require('../uiStyle');
    expect(styles.default.textContainer).toEqual({
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    });
});

it('should has titleText with correct content', function () {
    const styles = require('../uiStyle');
    expect(styles.default.titleText).toEqual({
        color: '#000000',
        fontSize: 30,
        marginTop: 20,
        fontWeight: 'bold',
    });
});

it('should has container_tests with correct content', function () {
    const styles = require('../uiStyle');
    expect(styles.default.container_tests).toEqual({
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#9AD3FF',
    });
});

it('should has textNoAbsolute with correct content', function () {
    const styles = require('../uiStyle');
    expect(styles.default.textNoAbsolute).toEqual({
        fontSize: 25,
        lineHeight: 25,
        letterSpacing: 0.3,
        marginHorizontal: 50,
        marginVertical: 10,
    });
});

it('should has text with correct content', function () {
    const styles = require('../uiStyle');
    expect(styles.default.text).toEqual({
        fontSize: 25,
        lineHeight: 25,
        letterSpacing: 0.3,
        marginHorizontal: 30,
        marginVertical: 20,
    });
});

it('should has stackedText with correct content', function () {
    const styles = require('../uiStyle');
    expect(styles.default.stackedText).toEqual({
        fontSize: 20,
        lineHeight: 25,
        letterSpacing: 0.3,
        marginHorizontal: 30,
        marginVertical: 30,
    });
});

it('should has vomsCircle with correct content', function () {
    const styles = require('../uiStyle');
    expect(styles.default.vomsCircle).toEqual({
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#ff3333',
        transform: [{ scaleY: 0.76 }, { scaleX: 0.67 }],
    });
});

it('should has contentContainer with correct content', function () {
    const styles = require('../uiStyle');
    expect(styles.default.contentContainer).toEqual({
        flex: 1,
        alignItems: 'center',
    });
});

it('should has contentContainerCentered with correct content', function () {
    const styles = require('../uiStyle');
    expect(styles.default.contentContainerCentered).toEqual({
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    });
});