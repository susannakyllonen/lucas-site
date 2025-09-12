// components/VideoEmbed.tsx
export default function VideoEmbed({ id }: { id: string }) {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "56.25%",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0,0,0,.35)",
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="Highlight video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </div>
  );
}
