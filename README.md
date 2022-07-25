### Password Generator Refactor Project

Our assignment was to take the current non-functional password generation page and re-factor it so that it works. The page did not originally have a function for password generation. It did include the querySelector for the #generate id, as well as the eventListener for click functionality.

Learning more about prompt(), confirm(), and alert() methods was paramount. I learned the distinction in their purposes, and had to decide the best fit for the context. Prompt() required input and room for user error, so I thought it best to limit its use. I chose confirm() for the majority of criteria prompts, then ended up using all three methods in my code. I also *really* wanted the user to be able to end the process by clicking away from these pop-ups. Ultimately, I could not find a way to do this in the assignment's time frame, but I wish to incorporate this functionality in the future.

As with all past assignments, I spent an obscene amount of time debugging a very simple syntax issue. And when I thought I had it completed, I realized that if I ran the generator more than a few times, it would occasionally not include special characters. I fixed this by removing a "+1" from the Math object calculation. I'm not entirely sure why that fixed the issue, but I will research this.


