import OpenAI from 'npm:openai';

const client = new OpenAI();

const response = await client.responses.create({
    model: 'gpt-4.1',
    input: [
        { role: "developer", content: "Write 5 sentences to John, the founder of companyX, introducing myself to John. The introduction should sound professional and personal and express why I am interested in a software engineer position at companyX. Avoid sounding overly egotistical" },
        { role: "user", content: "About me: I'm Andrew Roberts, a software engineer building refined software solutions for incredible businesses. I'm a graduate of the University of Delaware College of Engineering with over 5 years of software development and cybersecurity experience building solutions for Citibank, Lutron Electronics and organizations nationwide. I have taken interest in many areas of computer science and engineering ranging from full stack web development to embedded firmware development, the latter of which I had the opportunity to apply in my role at Lutron Electronics. I believe I am a great fit on any team passionate about building innovative solutions through computer software and hardware. I aim to build high-quality scalable software that improves peoples' quality of life. About companyX: companyX is on a mission to change how developers build applications in the cloud, by building the next, default storage platform in the cloud. Over the past 15 years, S3 has become the default way to store inactive data sets in the cloud, but the next-generation of AI and analytics applications need to actively process more data than ever before. We're solving this problem by building the first Volume storage product that's as fast as EBS, infinitely scaleable like S3, and connects to existing data sets in S3 and other repositories. Our customers choose Archil because this architecture radically simplifies how they think about working with their data." }
    ]
});

console.log(response.output_text);