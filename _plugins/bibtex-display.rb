# Remove BibTeX case-protection braces from visible titles only.
module BibtexDisplay
  def bibtex_title(value)
    value.to_s.delete('{}')
  end
end
Liquid::Template.register_filter(BibtexDisplay)
