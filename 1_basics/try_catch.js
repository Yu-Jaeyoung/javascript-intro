/**
 * try ... catch
 *
 * 1) 발생시킬 때 -> 던진다고 표현 (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고 표현 (catch)
 */

function runner() {
    try {
        console.log('Hello');

        throw new Error('problem occurred');

        console.log('Jaeyoung');
    } catch (e) {
        console.log('---catch---');
        console.log(e);
    } finally {
        console.log('---finally---');
    }
}

runner();
