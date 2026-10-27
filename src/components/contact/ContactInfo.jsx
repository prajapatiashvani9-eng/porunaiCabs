import { contactInfo } from "./contactData";
import ContactInfoCard from "./ContactInfoCard";
import ContactDetails from "./ContactDetails";

function ContactInfo() {
  return (
    <div className="space-y-4">
      {contactInfo.map((item) => (
        <ContactInfoCard
          key={item.title}
          item={item}
        />
      ))}

      <ContactDetails />
    </div>
  );
}

export default ContactInfo;