'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { MoveDown, MoveUp, PlusCircle, Trash2Icon } from 'lucide-react'
import { useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const verifyPhoneNumber = (phone: string) => {
  return /^0(\d){8,12}$/g.test(phone)
}

export function FieldArrayForm() {
  const ref = useRef<HTMLInputElement>(null)

  const FormSchema = z
    .object({
      blacklists: z
        .array(z.object({ number: z.string().min(1, 'blank').trim() }))
        .refine((data) => {
          return data.length > 0
        }, 'Please add a phone number'),
    })
    .superRefine(({ blacklists }, ctx) => {
      blacklists.forEach((i, index) => {
        if (!verifyPhoneNumber(i.number)) {
          ctx.addIssue({
            code: 'custom',
            message: 'Phone number is not valid',
            path: [`blacklists.${index}.number`],
          })
        }
      })
    })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'all',
    defaultValues: {
      blacklists: [],
    },
  })

  const { fields, append, remove, move } = useFieldArray({
    name: 'blacklists',
    control: form.control,
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success('Submit successfully')
  }

  const disableSubmit =
    !form.formState.isDirty || Object.keys(form.formState.errors).length > 0

  return (
    <Form {...form}>
      <form className="space-y-4 mt-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="blacklists"
          render={() => (
            <FormItem>
              <FormLabel>
                Phone Number
                <span className="italic text-red-400 font-medium">*</span>
              </FormLabel>
              <FormControl>
                <div className="flex items-center">
                  <Input ref={ref} />
                  <PlusCircle
                    className="w-5 ml-2 cursor-pointer"
                    onClick={() => {
                      const value = ref.current?.value.trim()
                      if (value) {
                        append({ number: value })
                        if (ref.current) {
                          ref.current.value = ''
                        }
                      } else {
                        toast('Enter your phone number')
                      }
                    }}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="max-h-[400px] overflow-auto">
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              name={`blacklists.${index}.number`}
              key={field.id}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center mb-2">
                      <MoveUp
                        className="w-5 cursor-pointer mr-2"
                        onClick={() => {
                          if (index > 0) {
                            move(index, index - 1)
                          }
                        }}
                      />
                      <MoveDown
                        className="w-5 cursor-pointer mr-2"
                        onClick={() => {
                          if (index < fields.length - 1) {
                            move(index, index + 1)
                          }
                        }}
                      />
                      <Input {...field} disabled />
                      <Trash2Icon
                        className="w-5 ml-2 cursor-pointer"
                        onClick={() => remove(index)}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <Button disabled={disableSubmit} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
