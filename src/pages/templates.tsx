import Link from "@docusaurus/Link";
import templates from "@site/docs/04-templates/templates.json";
import Layout from "@theme/Layout";
import React, { useEffect, useMemo, useState } from "react";



export default function Templates(): JSX.Element {
  const [searchQ, setSearchQ] = useState("")
  const [selectedTag, setSelectedTag] = useState("")
  const [resultTemplates, setResultTemplates] = useState(templates)

  const filterByTag = () => {
    if (!selectedTag) {
      return templates
    }
    return templates.filter((t) => {
      return t.tags.find((t) => t === selectedTag) ? true : false
    })
  }

  useEffect(() => {
    const templates = filterByTag()
    setResultTemplates(
      templates.filter((t) =>
        t.name.toLowerCase().includes(searchQ.toLowerCase())
      )
    )
  }, [searchQ, selectedTag])

  function getTagsFromTemplates(templates: any) {
    const tags: Record<string, number> = {}

    templates.forEach((template: any) => {
      template.tags.forEach((tag: any) => {
        tags[tag] = tags[tag] ? tags[tag] + 1 : 1
      })
    })

    const sortedTags: Record<string, number> = {}
    Object.keys(tags)
      .sort()
      .forEach((key: string) => {
        sortedTags[key] = tags[key]
      })

    return sortedTags
  }

  const tagsForTemplates = useMemo(
    () => getTagsFromTemplates(templates),
    [templates]
  )
  return (
    <Layout
      title="Templates"
      description="Easypanel provides templates for applications you know and love."
    >
      <section className="tw-pt-16 tw-pb-32 tw-px-4 lg:tw-px-8">
        <div className="tw-text-center">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-mt-4 tw-font-extrabold">
            Easypanel Templates
          </h2>
          <p className="tw-text-xl tw-text-gray-400 tw-mb-4">
            1-Click Installers for Your Favorite Applications
          </p>
        </div>
        <div className="tw-flex tw-justify-center tw-items-center tw-mb-4">
          <input 
            className="tw-p-2 tw-border-2 tw-border-gray-450 tw-rounded-md tw-mr-2 tw-w-1/10" 
            placeholder="Search..." 
            value={searchQ} 
            onChange={(e) => setSearchQ(e.target.value)}
          />
          <select 
            className="tw-p-2 tw-border-2 tw-border-gray-450 tw-rounded-md tw-w-1/10" 
            placeholder="Tags" 
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value="">Tags</option>
            <option value="Analytics">Analytics</option>
            <option value="Blog">Blog</option>
            <option value="Bookmarks">Bookmarks</option>
            <option value="Business Apps">Business Apps</option>
            <option value="Calendars">Calendars</option>
            <option value="Chat">Chat</option>
            <option value="CMS">CMS</option>
            <option value="Code Hosting">Code Hosting</option>
            <option value="Communication">Communication</option>
            <option value="CRM">CRM</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Dashboard">Dashboard</option>
            <option value="Data Science">Data Science</option>
            <option value="Databases">Databases</option>
            <option value="Developer Tools">Developer Tools</option>
            <option value="Documentation">Documentation</option>
            <option value="Documents">Documents</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Educational">Educational</option>
            <option value="Email">Email</option>
            <option value="ERP">ERP</option>
            <option value="File Management">File Management</option>
            <option value="Finance">Finance</option>
            <option value="Forums">Forums</option>
            <option value="Gallery">Gallery</option>
            <option value="Gaming">Gaming</option>
            <option value="Guest Books">Guest Books</option>
            <option value="Logging">Logging</option>
            <option value="Media">Media</option>
            <option value="Monitoring">Monitoring</option>
            <option value="Network Tools">Network Tools</option>
            <option value="Notes">Notes</option>
            <option value="Productivity">Productivity</option>
            <option value="Project Management">Project Management</option>
            <option value="RSS">RSS</option>
            <option value="Security">Security</option>
            <option value="Social Networking">Social Networking</option>
            <option value="Storage">Storage</option>
            <option value="Web Hosting">Web Hosting</option>
            <option value="Wiki">Wiki</option>
          </select>
        </div>
        
        <div className="tw-max-w-7xl tw-mx-auto tw-mt-16 tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 lg:tw-gap-8">
          {resultTemplates.map((template) => (
            <Link
              key={template.slug}
              href={`/docs/templates/${template.slug}`}
              // className="tw-pt-10 tw-pb-6 tw-bg-white tw-rounded-lg tw-text-gray-500 hover:tw-text-gray-900 hover:tw-scale-110 tw-transition-all"
              className="tw-p-6 tw-bg-gray-800 tw-rounded-lg tw-shadow-highlight hover:tw-scale-105 tw-transition-all"
            >
              {template.logo ? (
                <img
                  src={
                    require(`@site/docs/04-templates/${template.slug}/assets/${template.logo}`)
                      .default
                  }
                  alt="Example banner"
                  className="tw-h-12 tw-w-12 tw-block tw-rounded-lg"
                />
              ) : (
                <div className="tw-h-12 tw-w-12 tw-block tw-rounded-full tw-bg-gray-600" />
              )}
              <div className="tw-mt-4 tw-text-lg tw-font-medium tw-text-white">
                {template.name}
              </div>
              <div className="tw-mt-2 tw-text-sm tw-line-clamp-3 tw-text-white/75">
                {template.description}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
