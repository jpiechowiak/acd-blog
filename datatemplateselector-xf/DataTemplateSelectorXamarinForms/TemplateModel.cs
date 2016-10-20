namespace DataTemplateSelectorXamarinForms
{
    public enum TemplateOrientation
    {
        Horizontal,
        Vertical
    }

    public class TemplateModel
    {
        public TemplateOrientation TemplateOrientation { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
