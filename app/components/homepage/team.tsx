const members = [
  {
    name: "Umesh Sharma",
    role: "Founder & CEO",
    avatar:
      "https://designfolio-prod.s3.ap-south-1.amazonaws.com/68e63ebfcb2d80278caa789e/avatar-d0d1f897-23b1-4daa-b82d-9175aec9f2b8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAXT4KKUVNCPIVTIMY%2F20251107%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20251107T131045Z&X-Amz-Expires=3600&X-Amz-Signature=7fcb8dde69da4c72e6b25f10170e1a63d5955fe46f055658cb258453f3262585&X-Amz-SignedHeaders=host&x-id=GetObject",
  },

];

export default function TeamSection() {
  return (
    <section id="team" className="py-12 md:py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">
          Built by Creators, for Creators
        </h2>

        <div>
          <h3 className="mb-6 text-lg font-medium">Leadership</h3>
          <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
            {members.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
