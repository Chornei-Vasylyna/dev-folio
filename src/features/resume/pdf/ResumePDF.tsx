/** biome-ignore-all lint/suspicious/noArrayIndexKey: no other options */

import { Document, Image, Link, Page, Text, View } from "@react-pdf/renderer";
import { parseSkills } from "@/features/resume/lib/utils";
import type { User } from "@/lib/types/User.types";
import { styles } from "./ResumePDF.styles";
import { SectionTitle } from "./SectionTitle";

interface ResumePDFProps {
  user: User;
}

export const ResumePDF = ({ user }: ResumePDFProps) => {
  const {
    avatar,
    fullName,
    specialty,
    email,
    phone,
    telegramUrl,
    bio,
    skills: skillsRaw,
    experience,
    education,
    projects,
  } = user;

  const skills = parseSkills(skillsRaw);

  return (
    <Document title={`${fullName} — Resume`}>
      <Page size="A4" style={styles.page}>
        {/* Centered header */}
        <View style={styles.header}>
          {avatar && <Image src={avatar} style={styles.avatar} />}
          {specialty && <Text style={styles.specialty}>{specialty}</Text>}
          <Text style={styles.fullName}>{fullName}</Text>
          <View style={styles.headerContactsRow}>
            {email && <Text style={styles.headerContactText}>{email}</Text>}
            {phone && <Text style={styles.headerContactText}>{phone}</Text>}
          </View>
        </View>

        {/* About */}
        {bio && (
          <View style={styles.section}>
            <SectionTitle title="About me" />
            <Text style={styles.bioText}>{bio}</Text>
          </View>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <View style={styles.section}>
            <SectionTitle title="Experience" />
            <View style={styles.timeline}>
              {experience.map((item, i) => (
                <View key={i} style={styles.entry}>
                  <View style={styles.entryDot} />
                  <Text style={styles.entryTitle}>{item.position}</Text>
                  <Text style={styles.entrySubtitle}>
                    {item.company}
                    {item.period ? `  ·  ${item.period}` : ""}
                  </Text>
                  {item.description && (
                    <Text style={styles.entryDescription}>
                      {item.description}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <View style={styles.section}>
            <SectionTitle title="Education" />
            <View style={styles.timeline}>
              {education.map((item, i) => (
                <View key={i} style={styles.entry}>
                  <View style={styles.entryDot} />
                  <Text style={styles.entryTitle}>{item.specialty}</Text>
                  <Text style={styles.entrySubtitle}>
                    {item.institution}
                    {item.period ? `  ·  ${item.period}` : ""}
                  </Text>
                  {item.description && (
                    <Text style={styles.entryDescription}>
                      {item.description}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <View style={styles.section}>
            <SectionTitle title="Skills" />
            <View style={styles.skillsRow}>
              {skills.map((s) => (
                <Text key={s} style={styles.skillPill}>
                  {s}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <View style={styles.section}>
            <SectionTitle title="Projects" />
            {projects.map((p, i) => (
              <View key={i} style={styles.projectCard}>
                <Text style={styles.projectName}>{p.name}</Text>
                <Text style={styles.projectDescription}>{p.description}</Text>
                <View style={styles.projectLinksRow}>
                  {p.githubUrl && (
                    <Link src={p.githubUrl} style={styles.projectLink}>
                      {p.githubUrl}
                    </Link>
                  )}
                  {p.liveUrl && (
                    <Link src={p.liveUrl} style={styles.projectLink}>
                      {p.liveUrl}
                    </Link>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Contacts */}
        {(email || phone || telegramUrl) && (
          <View style={styles.section}>
            <SectionTitle title="Contacts" />
            <View style={styles.contactsList}>
              {email && <Text style={styles.contactLine}>{email}</Text>}
              {phone && <Text style={styles.contactLine}>{phone}</Text>}
              {telegramUrl && (
                <Text style={styles.contactLine}>{telegramUrl}</Text>
              )}
            </View>
          </View>
        )}

        <Text style={styles.footer}>{fullName} — Resume</Text>
      </Page>
    </Document>
  );
};
