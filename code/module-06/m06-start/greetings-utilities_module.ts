export function returnGreeting (greeting: string) : void {
    let greetingLength = getLength(greeting);
    console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}
function getLength(message: string): number {
    return message.length
}