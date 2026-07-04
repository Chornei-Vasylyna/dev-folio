import { StyleSheet } from "@react-pdf/renderer";

const COLORS = {
  text: "#1e293b",
  muted: "#64748b",
  mutedLight: "#94a3b8",
  indigo: "#4f46e5",
  indigoSoft: "#eef2ff",
  indigoBorder: "#c7d2fe",
  border: "#e2e8f0",
  headerBg: "#f8fafc",
  cardBg: "#fafafa",
  divider: "#f1f5f9",
};

export const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    color: COLORS.text,
    padding: 44,
  },

  // Centered header card
  header: {
    alignItems: "center",
    backgroundColor: COLORS.headerBg,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 32,
    paddingHorizontal: 28,
    marginBottom: 34,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 14,
  },
  avatarFallback: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  avatarInitials: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: COLORS.muted,
  },
  specialty: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: COLORS.indigo,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 8,
  },
  fullName: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 12,
  },
  headerContactsRow: {
    flexDirection: "row",
    gap: 20,
  },
  headerContactText: {
    fontSize: 9.5,
    color: COLORS.muted,
  },

  // Sections
  section: {
    marginBottom: 26,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
  },
  sectionAccent: {
    width: 4,
    height: 13,
    backgroundColor: COLORS.indigo,
    borderRadius: 2,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.3,
  },
  bioText: {
    fontSize: 10,
    color: COLORS.text,
    lineHeight: 1.7,
  },

  // Timeline (experience / education)
  timeline: {
    borderLeftWidth: 2,
    borderLeftColor: COLORS.indigoSoft,
    paddingLeft: 18,
  },
  entry: {
    position: "relative",
    marginBottom: 18,
  },
  entryDot: {
    position: "absolute",
    left: -23,
    top: 3,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.indigo,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  entryTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    marginBottom: 3,
  },
  entrySubtitle: {
    fontSize: 8.5,
    color: COLORS.muted,
    marginBottom: 6,
  },
  entryDescription: {
    fontSize: 9.5,
    color: COLORS.text,
    lineHeight: 1.6,
  },

  // Skills
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillPill: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: COLORS.indigo,
    backgroundColor: COLORS.indigoSoft,
    borderWidth: 1,
    borderColor: COLORS.indigoBorder,
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },

  // Projects
  projectCard: {
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.indigo,
    borderRadius: 6,
    padding: 16,
    marginBottom: 12,
  },
  projectName: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
  },
  projectDescription: {
    fontSize: 9.5,
    color: COLORS.text,
    lineHeight: 1.6,
    marginBottom: 9,
  },
  projectLinksRow: {
    flexDirection: "row",
    gap: 14,
  },
  projectLink: {
    fontSize: 8.5,
    color: COLORS.indigo,
  },

  // Contacts
  contactsList: {
    gap: 8,
  },
  contactLine: {
    fontSize: 10,
    color: COLORS.text,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginBottom: 26,
  },

  footer: {
    position: "absolute",
    bottom: 28,
    left: 44,
    right: 44,
    textAlign: "center",
    fontSize: 7.5,
    color: COLORS.mutedLight,
  },
});
