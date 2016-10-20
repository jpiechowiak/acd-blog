using System.Collections.ObjectModel;

using Xamarin.Forms;

namespace DataTemplateSelectorXamarinForms
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
            this.Items = new ObservableCollection<TemplateModel>()
            {
                new TemplateModel { FirstName = "Jan", LastName = "Kowalski", TemplateOrientation = TemplateOrientation.Horizontal },
                new TemplateModel { FirstName = "Jan", LastName = "Nowak", TemplateOrientation = TemplateOrientation.Horizontal },
                new TemplateModel { FirstName = "Stefan", LastName = "Kowalczyk", TemplateOrientation = TemplateOrientation.Vertical },
                new TemplateModel { FirstName = "Agnieszka", LastName = "Nowak", TemplateOrientation = TemplateOrientation.Horizontal },
                new TemplateModel { FirstName = "Paulina", LastName = "Nowaczyk", TemplateOrientation = TemplateOrientation.Vertical },
                new TemplateModel { FirstName = "Katarzyna", LastName = "Kowalska", TemplateOrientation = TemplateOrientation.Vertical },
                new TemplateModel { FirstName = "Marek", LastName = "Nowicki", TemplateOrientation = TemplateOrientation.Vertical },
                new TemplateModel { FirstName = "Anna", LastName = "Nowicka", TemplateOrientation = TemplateOrientation.Vertical },
                new TemplateModel { FirstName = "Grzegorz", LastName = "Wasilewski", TemplateOrientation = TemplateOrientation.Horizontal },
                new TemplateModel { FirstName = "Barbara", LastName = "Wasilewska", TemplateOrientation = TemplateOrientation.Horizontal }
            };
            this.BindingContext = this;
        }

        public ObservableCollection<TemplateModel> Items { get; private set; }
    }
}
