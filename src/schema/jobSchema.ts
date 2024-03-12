import { z } from 'zod';

const Job = z.object({
    jobId: z.string(),
    externalIdentifiers: z.optional(
        z.array(
            z.object({
                identifierName: z.string(),
                identifierValue: z.string(),
            })
        )
    ),
    provider: z.optional(
        z.object({
            code: z.string(),
            name: z.string(),
        })
    ),
    status: z.string(),
    jobStatus: z.object({
        status: z.string(),
    }),
    ingestionMethod: z.string(),
    createdDate: z.string(),
    modifiedDate: z.string(),
    apply: z.object({
        applyType: z.string(),
        applyUrl: z.string(),
    }),
    jobPosting: z.object({
        description: z.string(),
        url: z.string(),
        datePosted: z.string(),
        hiringOrganization: z.object({
            name: z.string(),
        }),
        identifier: z.object({
            name: z.string(),
            value: z.string(),
        }),
        title: z.string(),
        jobLocation: z.array(
            z.object({
                address: z.object({
                    addressLocality: z.string(),
                    addressRegion: z.string(),
                    addressCountry: z.string(),
                }),
                geo: z.object({
                    latitude: z.string(),
                    longitude: z.string(),
                }),
            })
        ),
    }),
    attributeValuePairs: z.optional(
        z.array(
            z.object({
                name: z.string(),
                value: z.string(),
            })
        )
    ),
    normalizedJobPosting: z.object({
        '@context': z.string(),
        '@type': z.string(),
        description: z.string(),
        url: z.string(),
        datePosted: z.string(),
        employmentType: z.array(z.string()),
        hiringOrganization: z.object({
            '@type': z.string(),
            name: z.string(),
        }),
        identifier: z.object({
            '@type': z.string(),
            name: z.string(),
            value: z.string(),
        }),
        jobLocation: z.array(
            z.object({
                '@type': z.string(),
                address: z.object({
                    '@type': z.string(),
                    addressLocality: z.string(),
                    addressRegion: z.string(),
                    addressCountry: z.string(),
                }),
                geo: z.object({
                    '@type': z.string(),
                    latitude: z.string(),
                    longitude: z.string(),
                }),
            })
        ),
        jobLocationType: z.string(),
        occupationalCategory: z.string(),
        salaryCurrency: z.string(),
        title: z.string(),
        validThrough: z.string(),
    }),
    now: z.optional(
        z.object({
            jobAdPricingTypeId: z.number(),
            trackingUrl: z.string(),
            activationDate: z.string(),
            attributeValuePairs: z.optional(
                z.array(
                    z.object({
                        name: z.string(),
                        value: z.string(),
                    })
                )
            ),
        })
    ),
    enrichments: z.object({
        language: z.object({
            languageCode: z.string(),
        }),
        mescos: z.array(
            z.object({
                id: z.string(),
            })
        ),
        normalizedJobLocations: z.array(
            z.object({
                postalAddress: z.object({
                    '@context': z.string(),
                    '@type': z.string(),
                    address: z.object({
                        '@type': z.string(),
                        addressLocality: z.string(),
                        addressRegion: z.string(),
                        addressCountry: z.string(),
                    }),
                    geo: z.object({
                        '@type': z.string(),
                        latitude: z.string(),
                        longitude: z.string(),
                    }),
                }),
                locationId: z.string(),
                countryCode: z.string(),
            })
        ),
        normalizedJobLocationsV2: z.array(
            z.object({
                postalAddress: z.object({
                    '@context': z.string(),
                    '@type': z.string(),
                    address: z.object({
                        '@type': z.string(),
                        addressLocality: z.string(),
                        addressRegion: z.string(),
                        addressCountry: z.string(),
                    }),
                    geo: z.object({
                        '@type': z.string(),
                        latitude: z.string(),
                        longitude: z.string(),
                    }),
                }),
                locationId: z.string(),
                countryCode: z.string(),
            })
        ),
        companyKb: z.object({
            normalizedCompanyName: z.string(),
            normalizedCompanyGuid: z.string(),
        }),
        normalizedTitles: z.array(
            z.object({
                title: z.string(),
            })
        ),
        normalizedSalary: z.object({
            currencyCode: z.object({
                name: z.string(),
                id: z.number(),
            }),
            salaryBaseType: z.object({
                name: z.string(),
                id: z.number(),
            }),
        }),
        jobLocationType: z.object({
            name: z.string(),
            id: z.number(),
        }),
        employmentTypes: z.array(
            z.object({
                name: z.string(),
                id: z.number(),
            })
        ),
        status: z.object({
            name: z.string(),
            id: z.number(),
        }),
        applyType: z.object({
            name: z.string(),
            id: z.number(),
        }),
        ingestionMethod: z.object({
            name: z.string(),
            id: z.number(),
        }),
        localizedMonsterUrls: z.array(
            z.object({
                locationId: z.string(),
                url: z.string(),
            })
        ),
        qualifiedForG4J: z.boolean(),
        isPublicJob: z.boolean(),
        googleSyntheticValidThrough: z.string(),
        processedDescriptions: z.object({
            shortDescription: z.string(),
        }),
        normalizedDatePosted: z.string(),
        soc: z.array(
            z.object({
                id: z.string(),
                usen: z.string(),
            })
        ),
        hashes: z.array(
            z.object({
                sourcePath: z.string(),
                description: z.string(),
                hashAlgorithm: z.string(),
                value: z.string(),
            })
        ),
    }),
    seoJobId: z.string(),
    formattedDate: z.string(),
    dateRecency: z.string(),
    jobAd: z.optional(
        z.object({
            type: z.string(),
            provider: z.string(),
            tracking: z.object({
                clickUrl: z.string(),
                impressionUrl: z.string(),
            }),
        })
    ),
    brandingExt: z.optional(
        z.object({
            companyBannerUrl: z.null(),
            companyPhotos: z.null(),
            companyBenefits: z.null(),
        })
    ),
    canonicalUrl: z.string(),
    searchEngine: z.string(),
    bespokeJob: z.boolean(),
    ldJsonEligible: z.boolean(),
    promoted: z.boolean(),
});

export const parseJob = (job: object) => {
    return Job.safeParse(job);
};

// extract the inferred type
export type Job = z.infer<typeof Job>;
// { jobId: string }
