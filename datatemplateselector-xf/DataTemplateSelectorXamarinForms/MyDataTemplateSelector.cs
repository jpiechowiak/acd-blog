using Xamarin.Forms;

namespace DataTemplateSelectorXamarinForms
{
    public class MyDataTemplateSelector : DataTemplateSelector
    {
        private readonly DataTemplate _dataTemplateH = null;
        private readonly DataTemplate _dataTemplateV = null;

        public MyDataTemplateSelector()
        {
            this._dataTemplateH = new DataTemplate(typeof(DataTemplateH));
            this._dataTemplateV = new DataTemplate(typeof(DataTemplateV));
        }

        protected override DataTemplate OnSelectTemplate(object item, BindableObject container)
        {
            var templateModel = item as TemplateModel;
            if (templateModel == null)
            {
                return null;
            }
            return templateModel.TemplateOrientation == TemplateOrientation.Horizontal ?
                this._dataTemplateH : this._dataTemplateV;
        }
    }
}
